/**
 * Responsible for handling authentication exceptions.
 */
class AuthenticationException extends Error {

  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor(message = '') {
    super(message);
    this.name = this.constructor.name;
  }
}

export default AuthenticationException;
