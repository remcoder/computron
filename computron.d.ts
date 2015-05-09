declare var Computron: ComputronStatic;
interface ComputronStatic {
	new<T>(f: (computation: Tracker.Computation) => T): Computron<T>;
}
interface Computron<T> {
	get(): T;
}
