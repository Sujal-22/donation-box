import { Contract, GlobalState, uint64, Txn } from "@algorandfoundation/algorand-typescript";

export class DonationBox extends Contract {

  // Global state to store total donations
  totalDonations = GlobalState<uint64>({ key: "total", initialValue: 0 });

  // Function: Donate Algo
  donate(): string {
    this.totalDonations.value = this.totalDonations.value + Txn.amount;
    return "Thanks for donating! 🙏";
  }

  // Function: Check balance
  checkTotal(): uint64 {
    return this.totalDonations.value;
  }
}
