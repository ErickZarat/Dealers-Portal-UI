import {Schedule} from "./Schedule";
import {Product} from "./Product";
import {AuthorizedChannel} from "./AuthorizedChannel";
import {User} from "./User";

export interface Dealer {
  id?: number,
  name: String,
  notificationEmail: String,
  alertEmail: String,
  schedule?: Schedule,
  products?: Product[],
  authorizedChannels?: AuthorizedChannel[],
  users?: User[]
}
