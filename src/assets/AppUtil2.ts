// import { messagesClient } from '~/src/api/API'
// import ErrorControl from '~/src/error/ErrorControl'

export default class AppUtil2 {
    // private _errorControl: ErrorControl
  
    constructor() {
    //   this._errorControl = new ErrorControl(this.constructor.name)
    }

    test(){
        alert("AppUtil2 test")
    }
  
    // async postMessages(text: string) {
    //   try {
    //     if (text.length > 0) {
    //       const res = await messagesClient.post('/messages', { text })
    //       console.log('[messages api] postMessages res', res)
    //       return res.data
    //     }
    //   } catch (e) {
    //     // this._errorControl.proc(e)
    //   }
    // }
  }
  