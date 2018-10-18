export interface Team {
    name: String;
    roster: Array<String>;
    rank?: Number;
    deposit: Boolean;
    fee: Boolean;
    captain: String;
    email?: String;
    phone?: String;
}