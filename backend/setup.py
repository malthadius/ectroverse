from setuptools import setup, find_packages
import os

root_dir = os.path.dirname(os.path.realpath(__file__))

with open(os.path.join(root_dir, "src/ectroverse/VERSION")) as f:
    version = f.read().strip()


setup(
    name="ectroverse",
    version=version,
    description="Ectroverse",
    packages=find_packages("src"),
    package_dir={"": "src"},
    include_package_data=True,
)
