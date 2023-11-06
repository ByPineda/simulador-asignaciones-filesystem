import {metadata} from './metadata.model';
import { bloque } from '../bloque.model';
import { indirect } from './indirect.model';
import { nestedIndirect } from './nested-indirect.model';

export interface Inodo {
    metadata : metadata;
    direct_blocks : bloque[];
    single_indirect : indirect;
    double_indirect : indirect[];
    triple_indirect : nestedIndirect[]
}