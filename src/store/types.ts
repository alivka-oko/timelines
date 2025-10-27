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
  // activeTimelineId: number;
  activeIdGroups: Record<string, number>;
  timelines: ITimeline[];
}
