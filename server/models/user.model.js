import bookshelf from '../config/bookshelf';

/**
 * User model.
 */
class User extends bookshelf.Model {
    
    get tableName() {
        return 'customer';
    } 
    get hasTimestamps() {
        return true;
    }
}

export default User;
