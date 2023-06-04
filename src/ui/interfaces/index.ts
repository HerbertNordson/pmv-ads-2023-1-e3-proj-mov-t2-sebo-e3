export interface IUser {
    id: number,
    name: string,
    fullName?: string,
    email: string,
    password: string,
    cpf?: string,
    dateOfBirth?: string
}

export interface IBooks {
    userId: number,
    title: string,
    price: string,
    author: string,
    editor: string,
    pages: string,
    conservation: string,
    category: string,
    image: string,
    id: number,
}

export interface IAddress {
    id: number,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string
}