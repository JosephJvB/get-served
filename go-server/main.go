package main

import (
	"net/http"
)

// serve static files at '/'
// how'm I gonna serve the static dir at all routes?
func main() {
	http.Handle("/", http.FileServer(http.Dir("../static")))
	http.ListenAndServe(":3001", nil)
}
