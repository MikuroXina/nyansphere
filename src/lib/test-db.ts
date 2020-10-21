import type { Subject } from "./subject";
import type { Submit } from "./submit";

export const submits: readonly Submit[] = [
  {
    id: "0",
    subjectId: "0",
    title: "Hello, World!",
    date: "2020/10/20 11:00",
    judge: "wrong",
    code: ["#include <iostream>", "", "int main() {", "}", ""].join("\n"),
  },
  {
    id: "1",
    subjectId: "0",
    title: "Hello, World!",
    date: "2020/10/20 12:00",
    judge: "accepted",
    code: [
      "#include <iostream>",
      "",
      "int main() {",
      '  std::cout << "Hello, World!\\n";',
      "}",
      "",
    ].join("\n"),
  },
];

export const subjects: readonly Subject[] = [];
