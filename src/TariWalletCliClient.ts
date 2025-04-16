import { spawn, SpawnOptions } from "child_process";

export class TariWalletCliClient {
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
}
