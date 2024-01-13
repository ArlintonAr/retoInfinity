export interface Client {
  id:          number;
  name:        string;
  lastName:    string;
  email:       string;
  password:    string;
  address:     string;
  phoneNumber: number;
  active:      boolean;
  createdAt:   Date;
  updatedAt:   Date;
}
