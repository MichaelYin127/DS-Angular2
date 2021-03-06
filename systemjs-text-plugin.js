/**
 * start JIT:i18n
 */
exports.translate = function(load) {
	if (this.builder && this.transpiler) {
		load.metadata.format = 'esm';
		return 'exp' + 'ort var __useDefault = true; exp' + 'ort default ' + JSON.stringify(load.source) + ';';
	}

	load.metadata.format = 'amd';
	return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
}
/**
 * end JIT:i18n
 */