## 变量

使用`let`声明变量，如下，`Rust`是强类型语言，`''`当引号用于表示字符，`""`双引号用于表示字符串

```rs
fn main(){
    let a = 10;
    let str = "xxx";
}
```

对于上面的变量a，如果我们直接去修改它，如这样`str = "11"`，是会遇到编译器报错的，原因是`Rust`中上面的声明会让变量默认是不可变的，如果要修改它需要使用关键字`mut`

```rs
let mut a = 10;
a = 100;
```

## 所有权

`所有权`是一个新的概念：每个值都有一个`所有者`，并且在同一时刻，每个值只能有一个所有者。所有者负责销毁值，当所有者离开作用域时，Rust会自动清理资源。

下面用String来举例：

1. 所有权

如下代码，`String::from("hello")`是`Rust`来创建String类型的方法，hello是创建的字符串，在这里，s是这个字符串的所有者，当main函数执行完后，`s`会离开当前作用域，`Rust`会自动调用`String`的`drop`函数来进行销毁

```rs
fn main{
    let s = String::from("hello");
}
// 会自动调用函数来消耗字符串
```

2. 移动
   如下代码，`s`的所有权将会移动到 `s1`上，原变量`s`将无法访问

   ```rs
   fn main{
   let s = String::from("hello");
   let s1 =s;
   }
   ```

3. 借用

如上面的解释可以得出，如果直接将一个字符串的变量赋值给另一个变量，会带走它的所有权，如`let a = s;`

那如何操作这个字符串呢，这里就需要用到借用，借用分为不可变借用和可变借用：

- 不可变借用：允许多个不可以引用同时存在，但不能对值进行修改。可看成`读`
  ```rs
      let s = String::from("hello");
      let t = &s;// 通过 & 来进行借用
      println!("{}", t);
  ```
- 可变借用：允许一个可变引用存在，可以修改值，但在同一时间内不能有其他不可变引用或可变引用。可看成`写`
  ```rs
  let mut s =String::from("hello");
  let t = &mut s;
  t.push_str(", world");
  println!("{}", t);
  ```

4. 克隆
   可以通过`clone`方法得到其副本

   ```rs
   let s1 = String::from("hello");
   let s2 = s1.clone();
   ```

5. 与生命周期相关

   生命周期就是一个变量的存活范围：如下：

   ```rs
   fn main(){
       let s = "x";
       {
           let b ="x"
       }
       // 在这里 b 将会被销毁，它的生命周期就是{}这个区间
   }
   ```

   这样的话，rust就会避免悬挂引用，下面看个`c`代码，由于delete操作会把`ptr`弄成悬挂指针，导致访问错误

   ```c
   int *ptr = new int(10);
   delete ptr;
   *ptr = 20 // error
   ```

   在rust中如下代码会异常，编译器会在编译时检测到这一点，并给出错误。

   ```rs
   fn main() {
    let r; // 这里 `r` 是一个引用
    {
        let x = 10; // `x` 的作用域是内层块
        r = &x;     // `r` 引用了 `x`
    }  // `x` 超出作用域，此时它的内存已经被释放

    // 编译错误：`r` 是悬挂引用，因为 `x` 的生命周期结束了，而 `r` 还在引用它
    println!("{}", r);
   }

   // 正确使用如下
   fn main() {
    let x = 10;
    let r = &x;  // `r` 引用 `x`
    println!("{}", r);  // `r` 是有效的，因为 `x` 在 `r` 使用时是有效的
   }
   ```

## 值的复制

对于基本类型值的复制，`Rust`会直接`copy`一个新的值然后赋给变量（实现了`Copy`trait的类型都可以），这里就不涉及所有权的改变。基础变量类型的变量的值是储存在`栈`上。

```rust
let a = 1;
let b = a;
```

对于复合类型的复制，如下直接copy，不会像其他语言如js一样，`a`和`b`共同持有这个结构体对象的引用，在所有权的规则下会直接把这个对象的引用交给`b`，这时a就失去了对这个对象的控制。这类诸如`String`、，`Vec` 的类型是存储在`堆`上

```rust
struct Person {
    name: String, // 如果是&str则不会发生结构体的所有权改变
    age: i32
}

let a = Person {
    name: "xx".to_string(),
    age: 12
}

let b = a;
```
