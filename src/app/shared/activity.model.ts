export interface IActivity {
    id: number
    name: string
    date: Date
    distance?: number
    rating?: number
    safetyRating?: number
    comments?: string
    gpxData: string
}