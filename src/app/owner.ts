import { Pet } from './pet';
import { Gender } from './gender';

export interface Owner {
   name?: string;
   gender?: Gender;
   age?: number;
   pets?: Pet[];
}
