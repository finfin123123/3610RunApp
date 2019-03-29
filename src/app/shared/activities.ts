import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
{
   "id": 1,
   "name": "River Run",
   "date": new Date('03/28/2019'),
   "distance": 1.5,
   "rating": 4,
   "safetyRating": 1,
   "comments": "Sunny day",
   "gpxData": '../../assets/gpx/riverrun.gpx'
},
{
    "id": 2,
    "name": "River Walk",
    "date": new Date('03/29/2019'),
    "distance": .5,
    "rating": 4,
    "safetyRating": 1,
    "comments": "Rainy day",
    "gpxData": '../../assets/gpx/riverrun.gpx'
 },
 {
    "id": 3,
    "name": "River Jog",
    "date": new Date('03/30/2019'),
    "distance": 9.5,
    "rating": 4,
    "safetyRating": 1,
    "comments": "Snowy day",
    "gpxData": '../../assets/gpx/riverrun.gpx'
 },
]