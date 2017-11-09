import * as console from 'console';
import { Member } from './member';

export class Characters {
	constructor() {}
	public getMembers() : Member[] {
		let witch : Member = new Member();
		witch.name = 'witch';
		witch.description = 'ugly, has a wart, smelly';
		witch.role = 'has one potion to bring to life and one poison to kill';

		let wolf : Member = new Member();
		wolf.id = Math.random();
		wolf.name = 'Wolf'
		wolf.description = 'hairy, druling, sharp teeth, bad breath';
		wolf.role = 'wakes up at night, decides who dies';

		let arr = [];
		arr.push(witch);
		arr.push(wolf);
		return arr;
	}
}
