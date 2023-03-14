/**
 * Responsible for handling API exceptions.
 */
class ApiException extends Error {

  // --------------------------------------------------------------------------
  //         Constructor
  // --------------------------------------------------------------------------
  constructor(message = '') {
    super(message);
    this.name = this.constructor.name;
  }
}

export default ApiException;
