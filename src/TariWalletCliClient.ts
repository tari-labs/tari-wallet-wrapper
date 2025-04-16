import { spawn, SpawnOptions } from "child_process";

export interface InitShaAtomicSwapRequest {
  amount: number;
  pubKey: string;
  message?: string;
}

export interface InitShaAtomicSwapResponse {
  preImageHex: string;
  preImageHash: string;
  outputHash: string;
}

export interface FinaliseShaAtomicSwapRequest {
  outputHash: string;
  preImageHex: string;
  message?: string;
}

export interface ClaimShaAtomicSwapRefundRequest {
  outputHash: string;
  message?: string;
}

export interface ITariWalletCliClient {
  execute(args: string[], options?: SpawnOptions): Promise<string>;
  initShaAtomicSwap(request: InitShaAtomicSwapRequest): Promise<InitShaAtomicSwapResponse>;
  finaliseShaAtomicSwap(request: FinaliseShaAtomicSwapRequest): Promise<void>;
  claimShaAtomicSwapRefund(request: ClaimShaAtomicSwapRefundRequest): Promise<void>;
}

export class TariWalletCliClient implements ITariWalletCliClient {
  private executablePath: string;
  private defaultOptions: SpawnOptions;

  constructor(executablePath: string, defaultOptions: SpawnOptions = {}) {
    this.executablePath = executablePath;
    this.defaultOptions = defaultOptions;
  }

  public async execute(args: string[], options?: SpawnOptions): Promise<string> {
    const spawnOptions: SpawnOptions = {
      ...this.defaultOptions,
      ...options,
    };

    return new Promise<string>((resolve, reject) => {
      const child = spawn(this.executablePath, args, spawnOptions);
      let output = "";
      let errorOutput = "";

      if (child.stdout) {
        child.stdout.on("data", (data: Buffer) => {
          output += data.toString();
        });
      }

      if (child.stderr) {
        child.stderr.on("data", (data: Buffer) => {
          errorOutput += data.toString();
        });
      }

      child.on("close", (code: number) => {
        if (code === 0) {
          resolve(output);
        } else {
          reject(new Error(`Executable exited with code ${code}. Error output: ${errorOutput || "No error output"}`));
        }
      });

      child.on("error", (err: Error) => {
        reject(err);
      });
    });
  }

  public async initShaAtomicSwap(request: InitShaAtomicSwapRequest): Promise<InitShaAtomicSwapResponse> {
    const { amount, pubKey, message } = request;
    const command = this.buildCommand("init-sha-atomic-swap", amount.toString(), pubKey, message);
    const result = await this.execute(["--command", command]);

    const lines = result.split("\n");
    let preImageHex: string | undefined;
    let preImageHash: string | undefined;
    let outputHash: string | undefined;

    for (const line of lines) {
      const preImageHexMatch = line.match(/pre_image hex: (.+)/);
      if (preImageHexMatch && preImageHexMatch[1]) {
        preImageHex = preImageHexMatch[1];
      }

      const preImageHashMatch = line.match(/pre_image hash: (.+)/);
      if (preImageHashMatch && preImageHashMatch[1]) {
        preImageHash = preImageHashMatch[1];
      }

      const outputHashMatch = line.match(/Output hash: (.+)/);
      if (outputHashMatch && outputHashMatch[1]) {
        outputHash = outputHashMatch[1];
      }
    }

    if (preImageHex && preImageHash && outputHash) {
      return { preImageHex, preImageHash, outputHash };
    }

    throw new Error(`Could not parse swap output data: ${result}`);
  }

  public async finaliseShaAtomicSwap(request: FinaliseShaAtomicSwapRequest) {
    const { outputHash, preImageHex, message } = request;
    const command = this.buildCommand("finalise-sha-atomic-swap", outputHash, preImageHex, message);
    await this.execute(["--command", command]);
  }

  public async claimShaAtomicSwapRefund(request: ClaimShaAtomicSwapRefundRequest) {
    const { outputHash, message } = request;
    const command = this.buildCommand("claim-sha-atomic-swap-refund", outputHash, message);
    await this.execute(["--command", command]);
  }

  private buildCommand(name: string, ...params: (string | undefined)[]) {
    const nonEmptyParams = params.filter((param) => param != null);
    return [name, ...nonEmptyParams].join(" ");
  }
}
