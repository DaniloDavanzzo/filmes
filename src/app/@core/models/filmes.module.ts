export class FilmesModule {
    id: number;
    title: string;
    description: string;
    author: string;
    synopsis: string;
    link_img: string;

    constructor() {
        this.id = 0;
        this.title = '';
        this.description = '';
        this.author = '';
        this.synopsis = '';
        this.link_img = '';
    }
}