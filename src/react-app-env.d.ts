/// <reference types="react-scripts" />

interface UWLocation {
    name: string;
    organizations: Organization[];
}

interface Organization {
    name: string;
    events: Event[];
}

interface Event {
    name: string;
    dates?: CalendarDate[];
    fields: Map<string, string>;
}

interface CalendarDate {
    duration: string;
    link: string;
    neverRepeat: boolean;
    rrule: string;
    startTime: string;
}

interface RouterProps { // type for `match.params`
    topicId: string; // must be type `string` since value comes from the URL
}