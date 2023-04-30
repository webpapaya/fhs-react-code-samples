export const funUnknown = (): unknown => 1
export const funAny = (): any => 1

export const funNever = (): never => 1

const any = funAny()
any.yzs()

const unknown = funUnknown()
if (typeof unknown === 'string') {
  unknown.toLocaleString()
}


const never = funNever()
never.test()



type A = Array<{ hallo: 1, whatever: 2}>
type B = { hallo: 1, whatever: 2}[]


const vector: [number, number] = [1, 2]
const [first, last] = vector


interface A {
  hallo: 1
}
interface B {
  hallo: 1
}

interface C {
  hallo: 1
}

type UserStatus =
  | 'registered'
  | 'suspended'
  | 'active'

enum UserStatusEnum {
  Registered = 'Registered',
  Suspended = 'Suspended',
  Active = 'Active',
}

const identity = <T>(value: T) => value

const value1 = 1;

const number = identity(value1)
number.toUpperCase()

const string = identity<UserStatusEnum>(UserStatusEnum.Registered)
string.toUpperCase()


type ServerResponse<T> = {
  payload: T[]
}

type User = {
  id: number,
  name: string,

  age: number
}

type UserResponse = ServerResponse<User>

type PickedUser = Pick<User, 'name' | 'age'>
type OmittedUser = Omit<User, 'id'>
const omittedUser: OmittedUser = {
  name: "test",
  age: 1
}

const returnTypeFunction = (number: number): string => `${number}`
type ArgumentOfFn = Parameters<typeof returnTypeFunction>
type FirstArgumentOfFn = ArgumentOfFn[0]

type ReturnOfFn = ReturnType<typeof returnTypeFunction>

const firstArgument: FirstArgumentOfFn = 1
const returnType: ReturnOfFn = "test"



const logResultComplex = <FN extends (...params: any) => any>(fn: FN) => (...params: Parameters<FN>): ReturnType<FN> => {
  const startTime = Date.now()
  const x = fn(...params)
  const endTime = Date.now()
  console.log("function took", endTime - startTime)
  return x
}
const loggingFunction = logResultComplex(returnTypeFunction)


type Function<Params, Return> = (...params: Params[]) => Return;
const logResultSimplified = <Params, Return>(fn: Function<Params, Return>) => {
  return (...params: Params[]): Return  => {
    const startTime = Date.now()
    const x = fn(...params)
    const endTime = Date.now()
    console.log("function took", endTime - startTime)
    return x
  }
}

const hallo = (a: string, b: number, c: boolean) => "hallo"
const halloWithTuple = (values: [string, number, boolean]) => "hallo"

const transformArgsToTuple = <FN extends (...args: any[]) => any>(fn: FN) => {
  return (args: Parameters<FN>): ReturnType<FN> => {
    return fn(...args)
  }
}
const transformedFunction = transformArgsToTuple(hallo)
transformedFunction(["string", 1, true])


const myArray = [1, 2, 3, 4, 'string']

type MyArray = typeof myArray[number]

const myConstArray = [1, 2, 3, 4, 'string', {test: 1}] as const;



const myConfig = {
  configA: 1,
  configB: 2
} as const

type MyConfig = typeof myConfig

// Object.keys(myConfig)
// Object.values(myConfig)

type Address = {
  street: string,
  zipCode: string,
  country: string,
}

type Email = {
  email: string
  isVerified: boolean
}

type Phone = {
  phone: string
  isVerified: boolean
}

type Verifiable<T> = T & {
  isVerified: boolean,
}

type Contact = Verifiable<
  | Phone
  | Email
  | Address
>


type Person = {
  firstName: string,
  lastName: string,
  contact: Contact
}

