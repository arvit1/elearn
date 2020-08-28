import { Topic } from './topic.model';
import { Media } from './media.model';

export interface Category {
  id: number;
  name: string;
  description?: string;
  featuredCourse?: number;
  created_at: Date;
  updated_at: Date;
  image: Media;
  topics: Topic[];
}
