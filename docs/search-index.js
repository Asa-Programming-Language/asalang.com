const SEARCH_INDEX = [
  {
    "name": "Builtin",
    "page": "Builtin.html",
    "type": "directory"
  },
  {
    "description": "Contains the {{DOCLINK:list}} data type",
    "name": "List",
    "page": "List.html",
    "type": "namespace"
  },
  {
    "description": "Creates a new list of the specified type.\nExample:\n<div class=\"codehilite\"><pre><span class=\"n\">x</s",
    "name": "list{{DOCLINK:type}}()",
    "page": "List.html#list{{DOCLINK:type}}()",
    "parent": "List",
    "type": "function"
  },
  {
    "description": "A dynamically allocated list structure",
    "name": "list",
    "page": "List.html#list",
    "parent": "List",
    "type": "struct"
  },
  {
    "description": "A builtin module for printing things to the terminal",
    "name": "Print",
    "page": "Print.html",
    "type": "namespace"
  },
  {
    "description": "A function for printing a character array to the terminal",
    "name": "print(*char)",
    "page": "Print.html#print(*char)",
    "parent": "Print",
    "type": "function"
  },
  {
    "description": "A function for printing a character array to the terminal with a newline",
    "name": "printl(*char)",
    "page": "Print.html#printl(*char)",
    "parent": "Print",
    "type": "function"
  },
  {
    "description": "A function for printing a newline to the terminal",
    "name": "newline()",
    "page": "Print.html#newline()",
    "parent": "Print",
    "type": "function"
  },
  {
    "description": "A function for printing an <code class=\"codehilite\"><span class=\"kt\">int</span></code> to the termin",
    "name": "print(int)",
    "page": "Print.html#print(int)",
    "parent": "Print",
    "type": "function"
  },
  {
    "description": "A function for printing an <code class=\"codehilite\"><span class=\"kt\">int</span></code> to the termin",
    "name": "printl(int)",
    "page": "Print.html#printl(int)",
    "parent": "Print",
    "type": "function"
  },
  {
    "description": "A builtin module defining casts between all of the builtin types",
    "name": "Casts",
    "page": "Casts.html",
    "type": "namespace"
  },
  {
    "description": "Converts an int to float",
    "name": "float(int)",
    "page": "Casts.html#float(int)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a char to float",
    "name": "float(char)",
    "page": "Casts.html#float(char)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Identity cast for float",
    "name": "float(float)",
    "page": "Casts.html#float(float)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a double to float",
    "name": "float(double)",
    "page": "Casts.html#float(double)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a bool to float",
    "name": "float(bool)",
    "page": "Casts.html#float(bool)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a char to double",
    "name": "double(char)",
    "page": "Casts.html#double(char)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a float to double",
    "name": "double(float)",
    "page": "Casts.html#double(float)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Identity cast for double",
    "name": "double(double)",
    "page": "Casts.html#double(double)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a bool to double",
    "name": "double(bool)",
    "page": "Casts.html#double(bool)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a float to int, truncating decimal portion",
    "name": "int(float)",
    "page": "Casts.html#int(float)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a double to int, truncating decimal portion",
    "name": "int(double)",
    "page": "Casts.html#int(double)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Identity cast for int",
    "name": "int(int)",
    "page": "Casts.html#int(int)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts an unsigned int to signed int",
    "name": "int(uint)",
    "page": "Casts.html#int(uint)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a bool to int",
    "name": "int(bool)",
    "page": "Casts.html#int(bool)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a float to unsigned int, truncating decimal portion",
    "name": "uint(float)",
    "page": "Casts.html#uint(float)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a double to unsigned int, truncating decimal portion",
    "name": "uint(double)",
    "page": "Casts.html#uint(double)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a signed int to unsigned int",
    "name": "uint(int)",
    "page": "Casts.html#uint(int)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "name": "uint(uint)",
    "page": "Casts.html#uint(uint)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a bool to unsigned int",
    "name": "uint(bool)",
    "page": "Casts.html#uint(bool)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a float to 64-bit unsigned int",
    "name": "uint64(float)",
    "page": "Casts.html#uint64(float)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a double to 64-bit unsigned int",
    "name": "uint64(double)",
    "page": "Casts.html#uint64(double)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts an int to 64-bit unsigned int",
    "name": "uint64(int)",
    "page": "Casts.html#uint64(int)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts an unsigned int to 64-bit unsigned int",
    "name": "uint64(uint)",
    "page": "Casts.html#uint64(uint)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a bool to 64-bit unsigned int",
    "name": "uint64(bool)",
    "page": "Casts.html#uint64(bool)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a float to 64-bit signed int",
    "name": "int64(float)",
    "page": "Casts.html#int64(float)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a double to 64-bit signed int",
    "name": "int64(double)",
    "page": "Casts.html#int64(double)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts an int to 64-bit signed int",
    "name": "int64(int)",
    "page": "Casts.html#int64(int)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts an unsigned int to 64-bit signed int",
    "name": "int64(uint)",
    "page": "Casts.html#int64(uint)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a bool to 64-bit signed int",
    "name": "int64(bool)",
    "page": "Casts.html#int64(bool)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a float to 16-bit unsigned int",
    "name": "uint16(float)",
    "page": "Casts.html#uint16(float)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a double to 16-bit unsigned int",
    "name": "uint16(double)",
    "page": "Casts.html#uint16(double)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts an int to 16-bit unsigned int",
    "name": "uint16(int)",
    "page": "Casts.html#uint16(int)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts an unsigned int to 16-bit unsigned int",
    "name": "uint16(uint)",
    "page": "Casts.html#uint16(uint)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "Converts a bool to 16-bit unsigned int",
    "name": "uint16(bool)",
    "page": "Casts.html#uint16(bool)",
    "parent": "Casts",
    "type": "function"
  },
  {
    "description": "A builtin module expanding operators for builtin types",
    "name": "Operators",
    "page": "Operators.html",
    "type": "namespace"
  },
  {
    "description": "A builtin module adding useful memory management tools",
    "name": "Memory",
    "page": "Memory.html",
    "type": "namespace"
  },
  {
    "description": "Allocates a block of memory\n",
    "name": "malloc(int)",
    "page": "Memory.html#malloc(int)",
    "parent": "Memory",
    "type": "function"
  },
  {
    "description": "Frees a block of memory previously allocated by malloc\n",
    "name": "free(pointer)",
    "page": "Memory.html#free(pointer)",
    "parent": "Memory",
    "type": "function"
  },
  {
    "description": "A builtin module defining the string type\nSee Also: {{DOCLINK:string}}\n",
    "name": "String",
    "page": "String.html",
    "type": "namespace"
  },
  {
    "description": "A function to overload {{DOCLINK:printl(*char)}} for strings",
    "name": "printl(string)",
    "page": "String.html#printl(string)",
    "parent": "String",
    "type": "function"
  },
  {
    "description": "The string data type\n\nYou can declare a string using double quotes:\n<div class=\"codehilite\"><pre><sp",
    "name": "string",
    "page": "String.html#string",
    "parent": "String",
    "type": "struct"
  },
  {
    "name": "size()",
    "page": "String.html#size()",
    "parent": "String::string",
    "type": "method"
  },
  {
    "description": "Prints all of the info related to the string instance to the terminal",
    "name": "dump()",
    "page": "String.html#dump()",
    "parent": "String::string",
    "type": "method"
  },
  {
    "description": "Concatenates two strings together",
    "name": "+(string, string)",
    "page": "String.html#+(string, string)",
    "parent": "String",
    "type": "operator"
  },
  {
    "description": "Concatenates a string with a character",
    "name": "+(string, char)",
    "page": "String.html#+(string, char)",
    "parent": "String",
    "type": "operator"
  },
  {
    "description": "Concatenates two null-terminated character arrays",
    "name": "+(*char, *char)",
    "page": "String.html#+(*char, *char)",
    "parent": "String",
    "type": "operator"
  },
  {
    "description": "A builtin module for printing colored text to the terminal using ANSI escape codes",
    "name": "ColorPrint",
    "page": "ColorPrint.html",
    "type": "namespace"
  },
  {
    "description": "Prints a string to the terminal with the specified color, then resets color formatting",
    "name": "colorPrint(string, color)",
    "page": "ColorPrint.html#colorPrint(string, color)",
    "parent": "ColorPrint",
    "type": "function"
  },
  {
    "description": "Prints a string to the terminal with the specified foreground and background colors, then resets col",
    "name": "colorPrint(string, fg color, bg color)",
    "page": "ColorPrint.html#colorPrint(string, fg color, bg color)",
    "parent": "ColorPrint",
    "type": "function"
  },
  {
    "description": "ANSI escape code to reset all color formatting back to terminal defaults",
    "name": "resetColor",
    "page": "ColorPrint.html#resetColor",
    "parent": "ColorPrint",
    "type": "constant"
  },
  {
    "description": "Module containing the foreground color codes used for printing colors",
    "name": "Fore",
    "page": "Fore.html",
    "type": "namespace"
  },
  {
    "description": "black color",
    "name": "black",
    "page": "Fore.html#black",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "red color",
    "name": "red",
    "page": "Fore.html#red",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "green color",
    "name": "green",
    "page": "Fore.html#green",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "yellow color",
    "name": "yellow",
    "page": "Fore.html#yellow",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "blue color",
    "name": "blue",
    "page": "Fore.html#blue",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "magenta color",
    "name": "magenta",
    "page": "Fore.html#magenta",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "cyan color",
    "name": "cyan",
    "page": "Fore.html#cyan",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "white color",
    "name": "white",
    "page": "Fore.html#white",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "brightBlack color",
    "name": "brightBlack",
    "page": "Fore.html#brightBlack",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "brightRed color",
    "name": "brightRed",
    "page": "Fore.html#brightRed",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "brightGreen color",
    "name": "brightGreen",
    "page": "Fore.html#brightGreen",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "brightYellow color",
    "name": "brightYellow",
    "page": "Fore.html#brightYellow",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "brightBlue color",
    "name": "brightBlue",
    "page": "Fore.html#brightBlue",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "brightMagenta color",
    "name": "brightMagenta",
    "page": "Fore.html#brightMagenta",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "brightCyan color",
    "name": "brightCyan",
    "page": "Fore.html#brightCyan",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "brightWhite color",
    "name": "brightWhite",
    "page": "Fore.html#brightWhite",
    "parent": "Fore",
    "type": "constant"
  },
  {
    "description": "Module containing the background color codes used for printing colors",
    "name": "Back",
    "page": "Back.html",
    "type": "namespace"
  },
  {
    "description": "black color",
    "name": "black",
    "page": "Back.html#black",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "red color",
    "name": "red",
    "page": "Back.html#red",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "green color",
    "name": "green",
    "page": "Back.html#green",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "yellow color",
    "name": "yellow",
    "page": "Back.html#yellow",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "blue color",
    "name": "blue",
    "page": "Back.html#blue",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "magenta color",
    "name": "magenta",
    "page": "Back.html#magenta",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "cyan color",
    "name": "cyan",
    "page": "Back.html#cyan",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "white color",
    "name": "white",
    "page": "Back.html#white",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "brightBlack color",
    "name": "brightBlack",
    "page": "Back.html#brightBlack",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "brightRed color",
    "name": "brightRed",
    "page": "Back.html#brightRed",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "brightGreen color",
    "name": "brightGreen",
    "page": "Back.html#brightGreen",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "brightYellow color",
    "name": "brightYellow",
    "page": "Back.html#brightYellow",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "brightBlue color",
    "name": "brightBlue",
    "page": "Back.html#brightBlue",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "brightMagenta color",
    "name": "brightMagenta",
    "page": "Back.html#brightMagenta",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "brightCyan color",
    "name": "brightCyan",
    "page": "Back.html#brightCyan",
    "parent": "Back",
    "type": "constant"
  },
  {
    "description": "brightWhite color",
    "name": "brightWhite",
    "page": "Back.html#brightWhite",
    "parent": "Back",
    "type": "constant"
  },
  {
    "name": "Rendering",
    "page": "Rendering.html",
    "type": "directory"
  },
  {
    "description": "A module for window and rendering functionality",
    "name": "Window",
    "page": "Window.html",
    "type": "namespace"
  },
  {
    "name": "General",
    "page": "General.html",
    "type": "directory"
  },
  {
    "description": "A module for rendering lines to a window",
    "name": "Line",
    "page": "Line.html",
    "type": "namespace"
  },
  {
    "name": "3D",
    "page": "3D.html",
    "type": "directory"
  },
  {
    "description": "A module for handling and drawing meshes to a window",
    "name": "Mesh",
    "page": "Mesh.html",
    "type": "namespace"
  }
];
