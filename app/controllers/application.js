import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked tweets = [
    {id: 1, username: "Fabián", description: "Hola!"},
    {id: 2, username: "Fabián", description: "Hola!"},
    {id: 3, username: "Fabián", description: "Hola!"},
  ];
}
