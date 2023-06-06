export class SignUpCredentials {
    email: string;
    password: string;
    name: string;
    lastName: string;
    emergencyContact: string;
    province: string;
    city: string;
    zipCode: string;
    obraSocial: string;
    plan: string;

    constructor(email: string,password: string,name: string,lastName: string,emergencyContact: string,
        province: string,city: string,zipCode: string,obraSocial: string,plan: string
    ) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.emergencyContact = emergencyContact;
        this.province = province;
        this.city = city;
        this.zipCode = zipCode;
        this.obraSocial = obraSocial;
        this.plan = plan;
    }
}
