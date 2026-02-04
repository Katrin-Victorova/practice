// type Initializer<T> = (
// 	resolve: (value: T) => void,
//   reject: (reason?:any) => void
// ) => void

// type AnyFanction = (...args: any[]) => any

// class MyPtomise<T> {
// 	thenCb: AnyFanction | null = null
// 	cathCb: AnyFanction | null = null

// 	constructor(initializer: Initializer<T>){
// 		initializer(this.resolve, this.reject)
// 	}

// 	then = (thenCb: (value: T) => void) => {
// 		this.thenCb = thenCb

// 		return this
// 	}

// 	catch = (cathCb: (reason?: any) => void) => {
// 		this.cathCb = cathCb

// 		return this
// 	}

// 	private resolve = (value: T) => {
// 		this.thenCb?.(value)
// 	}

// 	private reject = (reason?: any) => {
// 		this.cathCb?.(value)
// 	}
// }

// const sleep = (ms: number) => {
// 	return new Promise<void>((resolve) => { // возвращает нативный промис
// 		setTimeout(() => {
// 			resolve()
// 		}, ms)
// 	})
// }

// const promise = new tomise<number>((resolve) => {
// 	setTimeout(() => {
// 		resolve(5);
// 	}, 1);
// })
// .then(() => sleep(5000))
// .then(() => console.log("====="))
// .catch((error) => {
// 	console.log("error:", error)
// })

// // const promise = new MyPtomise<number>((resolve, reject) => {
// // 	setTimeout(() => {
// // 		resolve(5);
// // 	}, 1_000);
// // })
// // 	.then(value => {
// // 		console.log('value', value);
// // 	})
// // 	.catch(error => {
// // 		console.log('error', error);
// // 	});
