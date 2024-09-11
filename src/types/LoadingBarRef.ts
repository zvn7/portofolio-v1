export interface LoadingBarRef {
	continuousStart: () => void;
	complete: () => void;
	staticStart: () => void;
	error: () => void;
}
