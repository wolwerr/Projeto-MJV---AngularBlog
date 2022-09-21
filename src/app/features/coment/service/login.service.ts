
import { ComentService } from '../service/Coment.service'


export class LoginService {



  constructor( private comentService: ComentService) { }

  authenticate(email: string, password: string){
    return this.comentService.getComentByEmailAndPassword(email, password);
  }
}
