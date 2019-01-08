import bookshelf from '../config/bookshelf';

/**
 * User model.
 */
class User extends bookshelf.Model {
    get tableName() {
        return 'users';
    }

    get hasTimestamps() {
        return true;
    }
    
}

export default User;