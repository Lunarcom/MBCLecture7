<html>
    <head>
        <script>
            var expression = "";

            Function add(character) {
                expression = expression + character;
                document.getElementById("display").value = expression;
            }
            function compute() {
                document.getElementById("display"). Value = eval(expression);
            }
            function clearDisplay()  {
                expression = "";
                document.getElementById("display").value = 0;
            }
        </script>
    </head>