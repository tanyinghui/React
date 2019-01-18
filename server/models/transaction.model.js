import bookshelf from '../config/bookshelf';

/**
 * User model.
 */
class Deliver extends bookshelf.Model {
    get tableName() {
        return 'transaction_log';
    }

    get hasTimestamps() {
        return true;
    }
    
}

export default Deliver;