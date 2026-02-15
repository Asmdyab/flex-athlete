export enum Gender {
  Male = 0,
  Female = 1,
}

export enum Position {
  Coach = 0,
  Manager = 1,
  HR = 2,
  Accountant = 3,
  IT = 4,
}

export enum Nationality {
  American = 0,
  Canadian = 1,
  British = 2,
  Australian = 3,
  Chinese = 4,
  Korean = 5,
  Japanese = 6,
  Indian = 7,
  Russian = 8,
  SouthAfrican = 9,
  Egyptian = 10,
  Turkish = 11,
  Kuwaiti = 12,
  Saudi = 13,
  Emirati = 14,
  Moroccan = 15,
  Algerian = 16,
  Omanian = 17,
  Qatari = 18,
  Jordanian = 19,
  Syrian = 20,
  Lebanese = 21,
  Pakistani = 22,
  Philippine = 23,
  Palaestinian = 24,
  Other = 25,
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  ssn: string;
  salary: number;
  gender: Gender;
  hireDate: string;
  address: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  position: Position;
  branchId: number;
  appUserId: string;
}

export interface CreateEmployeeRequest {
  firstName: string;
  lastName: string;
  ssn: string;
  salary: number;
  gender: Gender;
  birthDate: string;
  email: string;
  nationality: Nationality;
  street: string;
  city: string;
  phoneNumber: string;
  secondNumber?: string;
  position: Position;
  branchId: number;
}

export interface UpdateEmployeeRequest {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
  street: string;
  city: string;
  phoneNumber: string;
  secondPhoneNumber?: string;
  position: Position;
  branchId: number;
}

export interface Branch {
  id: number;
  name: string;
  city: string;
  country: string;
  phoneNumber: string;
  email?: string;
  coX: string;
  coY: string;
  isActive: boolean;
}

export const PositionLabels: Record<Position, string> = {
  [Position.Coach]: 'Coach',
  [Position.Manager]: 'Manager',
  [Position.HR]: 'HR',
  [Position.Accountant]: 'Accountant',
  [Position.IT]: 'IT',
};

export const GenderLabels: Record<Gender, string> = {
  [Gender.Male]: 'Male',
  [Gender.Female]: 'Female',
};

export const NationalityLabels: Record<Nationality, string> = {
  [Nationality.American]: 'American',
  [Nationality.Canadian]: 'Canadian',
  [Nationality.British]: 'British',
  [Nationality.Australian]: 'Australian',
  [Nationality.Chinese]: 'Chinese',
  [Nationality.Korean]: 'Korean',
  [Nationality.Japanese]: 'Japanese',
  [Nationality.Indian]: 'Indian',
  [Nationality.Russian]: 'Russian',
  [Nationality.SouthAfrican]: 'South African',
  [Nationality.Egyptian]: 'Egyptian',
  [Nationality.Turkish]: 'Turkish',
  [Nationality.Kuwaiti]: 'Kuwaiti',
  [Nationality.Saudi]: 'Saudi',
  [Nationality.Emirati]: 'Emirati',
  [Nationality.Moroccan]: 'Moroccan',
  [Nationality.Algerian]: 'Algerian',
  [Nationality.Omanian]: 'Omanian',
  [Nationality.Qatari]: 'Qatari',
  [Nationality.Jordanian]: 'Jordanian',
  [Nationality.Syrian]: 'Syrian',
  [Nationality.Lebanese]: 'Lebanese',
  [Nationality.Pakistani]: 'Pakistani',
  [Nationality.Philippine]: 'Philippine',
  [Nationality.Palaestinian]: 'Palestinian',
  [Nationality.Other]: 'Other',
};
