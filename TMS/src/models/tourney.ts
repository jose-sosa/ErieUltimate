import { Team } from "src/models/team";

export interface Tournament {
    name: String;
    capacity: Number;
    location: String;
    cost: Number;
    spots_remaining: Number;
    start_date: Date;
    deposit: Number;
    roster_max?: Number;
    teams: Array<Team>;
}