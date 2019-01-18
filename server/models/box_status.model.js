import bookshelf from '../config/bookshelf';

/**
 * User model.
 */
class Box extends bookshelf.Model {
    get tableName() {
        return 'box_status';
    }

    get hasTimestamps() {
        return true;
    }
    
}

export default Box;