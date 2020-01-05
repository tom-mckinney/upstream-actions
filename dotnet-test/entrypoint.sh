#!/bin/sh

result=$(dotnet test $1)

echo ::set-output name=result::$result
