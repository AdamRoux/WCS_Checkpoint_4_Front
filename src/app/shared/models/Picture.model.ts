export class Picture {
   private _id: number;
   private _url: string;


	constructor(id: number, url: string) {
		this._id = id;
		this._url = url;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter url
     * @return {string}
     */
	public get url(): string {
		return this._url;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter url
     * @param {string} value
     */
	public set url(value: string) {
		this._url = value;
	}

}