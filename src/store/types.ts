export interface ISlide {
  id: number;
  year: number;
  text: string;
}

export interface ITimeline {
  id: number;
  topic: string;
  yearFrom: number;
  yearTo: number;
  slides: ISlide[];
}

export interface TimelineState {
  activeIdGroups: Record<string, { id: number; showTopic: boolean }>;
  timelines: ITimeline[];
}
