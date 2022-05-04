import { AgencyRange } from "./agency-range.enum";
import { AgencyStatus } from "./agency-status.enum";

export interface Agency {
  id: string;
  name: string;
  range: AgencyRange;
  status: AgencyStatus;
}

// export class AgencyClass { }

// export type AgencyType = { id?: string; name: string; range: AgencyRangeType };

// type AgencyTypePartial = Partial<AgencyType>;
// type AgencyTypeRequired = Required<AgencyType>;

// const agencia: AgencyType = { name: "", range: "Interplanetary" };
// const agenciaParcial: AgencyTypePartial = {};
// const agenciaRequired: AgencyTypeRequired = { name: "", range: "Interplanetary" };
