import { TypeOrmModule } from '@nestjs/typeorm';
import Entities from './entities';
import Repositories from './repositories';

export default TypeOrmModule.forFeature([...Entities, ...Repositories]);
