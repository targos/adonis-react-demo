import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import Index from 'App/Components/pages/Index';

export default class MyController {
  index({ react }: HttpContextContract) {
    return react.render(Index);
  }
}
