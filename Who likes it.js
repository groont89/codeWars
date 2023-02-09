function likes(names) {
  let users = names.length - 2;
  return names.length == 0
    ? "no one likes this"
    : names.length == 1
    ? names[0] + " likes this"
    : names.length == 2
    ? names[0] + " and " + names[1] + " like this"
    : names.length == 3
    ? names[0] + ", " + names[1] + " and " + names[2] + " like this"
    : names.length >= 4
    ? names[0] + ", " + names[1] + " and " + users + " others like this "
    : "no";
}
console.log(likes(["aB08EZGDo5h3eW2B", "AVT1u3WZu", "Mark", "Max"]));
