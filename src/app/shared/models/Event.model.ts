import { Picture } from "./Picture.model";

export class Event {
   private _id: number;
   private _title: string;
   private _description: string;
   private _place: string;
   private _date: Date;
   private _pictures: Picture[];
   private _creationDate: Date;
   private _continentId: number;


	constructor(id: number, title: string, description: string, place: string, date: Date, pictures: Picture[], creationDate: Date, continentId: number) {
		this._id = id;
		this._title = title;
		this._description = description;
		this._place = place;
		this._date = date;
		this._pictures = pictures;
		this._creationDate = creationDate;
		this._continentId = continentId;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter place
     * @return {string}
     */
	public get place(): string {
		return this._place;
	}

    /**
     * Getter date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Getter pictures
     * @return {Picture[]}
     */
	public get pictures(): Picture[] {
		return this._pictures;
	}

    /**
     * Getter creationDate
     * @return {Date}
     */
	public get creationDate(): Date {
		return this._creationDate;
	}

    /**
     * Getter continentId
     * @return {number}
     */
	public get continentId(): number {
		return this._continentId;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter place
     * @param {string} value
     */
	public set place(value: string) {
		this._place = value;
	}

    /**
     * Setter date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}

    /**
     * Setter pictures
     * @param {Picture[]} value
     */
	public set pictures(value: Picture[]) {
		this._pictures = value;
	}

    /**
     * Setter creationDate
     * @param {Date} value
     */
	public set creationDate(value: Date) {
		this._creationDate = value;
	}

    /**
     * Setter continentId
     * @param {number} value
     */
	public set continentId(value: number) {
		this._continentId = value;
	}

}