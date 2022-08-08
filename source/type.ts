export interface Parameters<Props, Propless> {
	readonly base?: string;
	readonly variants?: Propless extends null ? Partial<{ [Key in keyof Props]: Props[Key] extends string | undefined ? Partial<{ [Value in Extract<Props[Key], string>]: string }> : string }> : Propless
	readonly compounds?: Array<[Partial<Propless extends null ? Props : { [Key in keyof Propless]: Propless[Key] extends object ? keyof Propless[Key] : boolean }>, string]>,
}

export interface IPalette {
	tokens?: object;
};
