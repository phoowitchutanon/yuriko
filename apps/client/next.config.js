/** @type {import('next').NextConfig} */

module.exports = {
	poweredByHeader: false,
	reactStrictMode: true,
	trailingSlash: false,
	swcMinify: true,
	compress: true,
	distDir: 'build',
	devIndicators: {
		buildActivityPosition: 'bottom-right',
	},
}
