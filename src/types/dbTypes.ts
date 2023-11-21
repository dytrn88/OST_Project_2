export type AboType = {
  name: string;
  value: string;
  regular: {
    prices: number[];
    validities: string[];
  };
  student: {
    prices: number[];
    validities: string[];
  };
};

export interface User {
  abo: string;
  address: string;
  city: string;
  email: string;
  firstName: string;
  lastName: string;
  profileUrl: string;
  zipCode: string;
  value: string;
  name: string;
}

export interface Session {
  checkin: Date;
  session: string;
  userData: User;
}
