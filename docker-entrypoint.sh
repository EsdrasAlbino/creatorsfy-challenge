#!/bin/sh
set -e

echo "⏳ Waiting for database to be ready..."
sleep 5

echo "🚀 Running database migrations..."
yarn db:push

echo "✅ Migrations completed!"

echo "🎯 Starting application..."
exec "$@"
