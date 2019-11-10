export class FilmesModule {
    id: number;
    nome: string;
    descricao: string;
    autor: string;
    sinopse: string;
    img: string;

    constructor() {
        this.id = 0;
        this.nome = '';
        this.descricao = '';
        this.autor = '';
        this.sinopse = '';
        this.img = '';
    }
}