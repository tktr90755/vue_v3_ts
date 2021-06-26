export default interface ITicker {
  add(instance: () => void, id: string): void;
  kill(id: string): void;
  killAll(): void;
  pause(): void;
  resume(): void;
  has(id: string): boolean;
}
