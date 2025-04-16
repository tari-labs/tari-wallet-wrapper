import { describe, expect, it } from "vitest";
import { TariWalletCliClient } from "./TariWalletCliClient";

describe(TariWalletCliClient, () => {
  it("can execute commands", async () => {
    const client = new TariWalletCliClient("ls");
    const result = await client.execute(["-la"]);
    expect(result.includes("tsconfig.json"));
  });
});
